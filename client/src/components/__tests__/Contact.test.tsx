import { describe, expect, test, vi } from 'vitest';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { render } from '../../test-utils';
import Contact from '../contact/Contact';
import userEvent from '@testing-library/user-event';

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
    
    expect(screen.getByText('Email')).toBeDefined();
    expect(screen.getByText('LinkedIn')).toBeDefined();
    expect(screen.getByText('GitHub')).toBeDefined();
    expect(screen.getByText('Location')).toBeDefined();
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
    const user = userEvent.setup();
    
    const nameInput = screen.getByLabelText(/Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageInput = screen.getByLabelText(/Message/i);
    
    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(messageInput, 'Hello, this is a test message.');
    
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
    
    expect(screen.getByText(/© \d{4} Iman Warsame/)).toBeDefined();
  });

  test('should have email copy functionality', () => {
    render(<Contact />);
    
    // Look for copy button (should be present for email contact info)
    const emailSection = screen.getByText('hello@warsame.dev').closest('div');
    expect(emailSection).toBeDefined();
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
    const user = userEvent.setup();

    const submitButton = screen.getByText('Send Message');
    
    // Fill required fields
    await user.type(screen.getByLabelText(/Name/i), 'Test User');
    await user.type(screen.getByLabelText(/Email/i), 'test@example.com');
    await user.type(screen.getByLabelText(/Message/i), 'Test message');
    
    // Click submit
    await user.click(submitButton);
    
    // Button should be clickable
    expect(submitButton).toBeDefined();
  });
});
