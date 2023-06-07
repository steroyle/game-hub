import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Game from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import CricticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface GameProps {
  game: Game;
}

const GameCard = ({ game }: GameProps) => {

  if (!game) return null;

  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          {game.parent_platforms && <PlatformIconList platforms={game.parent_platforms.map(({ platform }) => platform)} />}
          <CricticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl'><Link to={`/games/${game.slug}`}>{game.name}<Emoji rating={game.rating_top} /></Link></Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard;