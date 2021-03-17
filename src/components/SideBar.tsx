import { Button } from './Button';
import { GenreResponseProps } from '../App';

interface SidebarProps {
  genres: GenreResponseProps[]
  onClick: (genre_id: number) => void;
  selectedGenreId: number;
}

export function SideBar({genres, onClick, selectedGenreId}: SidebarProps) {
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => onClick(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}