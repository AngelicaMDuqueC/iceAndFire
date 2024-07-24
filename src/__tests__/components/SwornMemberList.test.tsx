
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SwornMemberList } from '../../components/SwornMemberList';
import { SwornMember } from '@/domain/entities/swornMember';



describe("SwornMemberList", () => {
  const swornMembers: SwornMember[] = [
    {
      name: "Jon Snow",
      alive: true,
      deathInfo: "Melisandre killed him",
    },
    {
      name: "Arya Stark",
      alive: true,
      deathInfo: "",
    },
    {
      name: "Cersei Lannister",
      alive: false,
      deathInfo: "Jaime pushed her off the wall",
    },
    {
      name: "Daenerys Targaryen",
      alive: false,
      deathInfo: "Drogon burned her",
    },
  ];

  const Wrapper = () => {
    return (
      <SwornMemberList members={swornMembers} />
    );
  };

  test("should render a list of card items", () => {
    const { getAllByRole } = render(<Wrapper />);
    const cards = getAllByRole("article");
    expect(cards.length).toBe(4);
  });

  test("each card item should have a title, description, and a button", () => {
    const { getAllByRole } = render(<Wrapper />);
    const cards = getAllByRole("article");
    cards.forEach((card) => {
      const title = screen.getByText(/Jon Snow|Arya Stark|Cersei Lannister|Daenerys Targaryen/);
      const description = card.querySelector(".SwornMemberList-description");
      const button = card.querySelector(".SwornMemberList-button");

      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
