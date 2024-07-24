import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {HouseList} from '../../components/HouseList';

describe("HouseList", () => {
  test("should render the component", () => {
    render(<HouseList />);
    const houseListElement = screen.getByTestId("house-list");
    screen.debug();
    expect(houseListElement).toBeInTheDocument();
  });
})