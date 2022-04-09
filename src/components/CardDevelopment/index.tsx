import { FC } from "react";
import { AiFillLike } from "react-icons/ai";
import { IDevProps } from "../../interface/dev.article.interface";

import { dateFormat } from "../../helpers/dateFormat";

import { Container, Box, BackgroundImage, Dev, Likeds } from "./styles";

export const CardDevelopment: FC<IDevProps> = ({
  created_at,
  positive_reactions_count,
  title,
  cover_image,
  user,
  description,
  url,
}) => {
  return (
    <Container>
      {positive_reactions_count > 0 ? (
        <Likeds>
          <AiFillLike />
          {positive_reactions_count}
        </Likeds>
      ) : (
        <></>
      )}
      <Box>{cover_image ? <BackgroundImage cover={cover_image} /> : <></>}</Box>
      <Box>
        <Dev>
          <strong>DEVELOPEMENT ⋅</strong>
          <span>{dateFormat(created_at)}</span>
        </Dev>
        <div className='grow'>
          <h3>{title}</h3>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div className='box__profile'>
          <div>
            <img src={user.profile_image_90} alt={user.name} />
          </div>
          <div>
            <strong>{user.name}</strong>
            <a href={url}>Link for Post</a>
          </div>
        </div>
      </Box>
    </Container>
  );
};
