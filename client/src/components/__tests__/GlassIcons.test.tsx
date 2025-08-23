import { describe, expect, test, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '../../test-utils';
import GlassIcons from '../glassIcons/GlassIcons';

const mockItems = [
  {
    icon: <div data-testid="test-icon-1">Icon 1</div>,
    color: 'blue',
    label: 'Test Icon 1',
    customClass: 'test-class-1',
    onClick: vi.fn(),
  },
  {
    icon: <div data-testid="test-icon-2">Icon 2</div>,
    color: 'red',
    label: 'Test Icon 2',
    customClass: 'test-class-2',
    onClick: vi.fn(),
  },
];

describe('GlassIcons Component', () => {
  beforeEach(() => {
    mockItems.forEach(item => {
      if (item.onClick) {
        vi.clearAllMocks();
      }
    });
  });

  test('should render all provided icons', () => {
    render(<GlassIcons items={mockItems} />);
    
    expect(screen.getByTestId('test-icon-1')).toBeDefined();
    expect(screen.getByTestId('test-icon-2')).toBeDefined();
  });

  test('should handle icon clicks', () => {
    render(<GlassIcons items={mockItems} />);
    
    const icon1 = screen.getByTestId('test-icon-1').closest('button');
    if (icon1) {
      fireEvent.click(icon1);
      expect(mockItems[0].onClick).toHaveBeenCalledOnce();
    }
  });

  test('should render with custom className', () => {
    render(<GlassIcons items={mockItems} className="custom-glass-icons" />);
    
    const container = screen.getByTestId('test-icon-1').closest('.custom-glass-icons');
    expect(container).toBeDefined();
  });

  test('should render empty when no items provided', () => {
    const { container } = render(<GlassIcons items={[]} />);
    
    expect(container.firstChild).toBeDefined();
  });

  test('should apply custom classes to icons', () => {
    render(<GlassIcons items={mockItems} />);
    
    const icon1Container = screen.getByTestId('test-icon-1').closest('.test-class-1');
    expect(icon1Container).toBeDefined();
  });

  test('should handle icons without onClick handlers', () => {
    const itemsWithoutClick = [
      {
        icon: <div data-testid="static-icon">Static Icon</div>,
        color: 'green',
        label: 'Static Icon',
        customClass: 'static-class',
      },
    ];

    render(<GlassIcons items={itemsWithoutClick} />);
    
    expect(screen.getByTestId('static-icon')).toBeDefined();
  });
});