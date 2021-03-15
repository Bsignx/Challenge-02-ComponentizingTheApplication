import { GenreResponseProps } from '../App'
import { Button } from "./Button";

import '../styles/sidebar.scss';

interface SidebarProps {
  selectedGenreId: number;
  genres: GenreResponseProps[];
  handleClickButton: (id: number) => void;
}

export function SideBar({ genres, selectedGenreId , handleClickButton }: SidebarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}