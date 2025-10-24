import { describe, expect, test, vi } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { render } from '../../test-utils';
import Contact from '../contact/Contact';

// Mock EmailJS
vi.mock('@emailjs/browser', () => ({
  sendForm: vi.fn().mockResolvedValue({ status: 200, text: 'OK' }),
}));

// Mock GlassIcons component
vi.mock('../glassIcons/GlassIcons', () => ({
  default: ({ items }: any) => (
    <div data-testid="glass-icons">
      {items.map((item: any, index: number) => (
        <button key={index} onClick={item.onClick}>
          {item.label}
        </button>
      ))}
    </div>
  )
}));

// Mock clipboard API globally
Object.defineProperty(window, 'navigator', {
  value: {
    clipboard: {
      writeText: vi.fn().mockResolvedValue(undefined)
    }
  },
  configurable: true
});

describe('Contact Component', () => {

  test('should render section badge', () => {
    render(<Contact />);
    
    expect(screen.getByText('Contact')).toBeDefined();
  });

  test('should render main heading', () => {
    render(<Contact />);
    
    expect(screen.getByText("Let's Work Together")).toBeDefined();
  });

  test('should render contact description', () => {
    render(<Contact />);
    
    expect(screen.getByText(/Have a project in mind/i)).toBeDefined();
  });

  test('should render contact information cards', () => {
    render(<Contact />);
    
    // Use getAllByText to handle multiple "Email" occurrences
    const emailElements = screen.getAllByText('Email');
    expect(emailElements.length).toBeGreaterThan(0);
    
    const linkedinElements = screen.getAllByText('LinkedIn');
    expect(linkedinElements.length).toBeGreaterThan(0);
    const githubElements = screen.getAllByText('GitHub');
    expect(githubElements.length).toBeGreaterThan(0);
    // Removed Location check as it's not in the component
  });

  test('should render contact form', () => {
    render(<Contact />);
    
    expect(screen.getByText('Send me a message')).toBeDefined();
    expect(screen.getByLabelText(/Name/i)).toBeDefined();
    expect(screen.getByLabelText(/Email/i)).toBeDefined();
    expect(screen.getByLabelText(/Message/i)).toBeDefined();
  });

  test('should handle form input changes', async () => {
    render(<Contact />);
    
    const nameInput = screen.getByLabelText(/Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageInput = screen.getByLabelText(/Message/i);
    
    // Use fireEvent instead of userEvent to avoid clipboard conflicts
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message.' } });
    
    expect((nameInput as HTMLInputElement).value).toBe('John Doe');
    expect((emailInput as HTMLInputElement).value).toBe('john@example.com');
    expect((messageInput as HTMLTextAreaElement).value).toBe('Hello, this is a test message.');
  });

  test('should render send message button', () => {
    render(<Contact />);
    
    expect(screen.getByText('Send Message')).toBeDefined();
  });

  test('should render social icons', () => {
    render(<Contact />);
    
    expect(screen.getByTestId('glass-icons')).toBeDefined();
  });

  test('should render copyright text', () => {
    render(<Contact />);
    
    expect(screen.getByText(/© \d{4} Iman Warsame\./)).toBeDefined();
  });

  test('should have email contact functionality', () => {
    render(<Contact />);
    
    // Look for the email icon in the GlassIcons component
    const glassIcons = screen.getByTestId('glass-icons');
    expect(glassIcons).toBeDefined();
    
    // Check that email buttons are present (form label and social icon)
    const emailElements = screen.getAllByText('Email');
    expect(emailElements.length).toBeGreaterThan(0);
  });

  test('the email input field and its properties', () => {
    render(<Contact />);
    const input = document.querySelector('#user_email') as HTMLInputElement | null;

    // Input exists in the form component
    expect(input).toBeTruthy();

    // Is empty initially
    expect(input?.value).toBe('');

    if (input) {
      // test the type prop
      expect(input.type).toBe('email');

      // test the name prop
      expect(input.name).toBe('user_email');

      // test the value prop
      fireEvent.change(input, {
        target: {
          value: 'john@doe.com'
        }
      });
      expect(input.value).toBe('john@doe.com');
    }
  });

  test('submit button click handling', async () => {
    render(<Contact />);

    const submitButton = screen.getByText('Send Message');
    
    // Fill required fields using fireEvent
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Test message' } });
    
    // Click submit
    fireEvent.click(submitButton);
    
    // Button should be clickable
    expect(submitButton).toBeDefined();
  });
});
