import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SwornMemberItem } from '../../components/SwornMemberItem';

describe("SwornMemberItem", () => {
  test("should render the component with alive status", () => {
    render(<SwornMemberItem name="Jon Snow" alive />);
    const nameElement = screen.getByText("Jon Snow");
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveStyle("color: green");
  });

  test("should render the component with dead status", () => {
    render(<SwornMemberItem name="Jon Snow" alive={false} />);
    const nameElement = screen.getByText("Jon Snow");
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveStyle("color: red");
  });
})
