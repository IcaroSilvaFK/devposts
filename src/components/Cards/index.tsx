import { FC } from "react";
import Link from "next/link";

import { Container, Box, Image, Tag } from "./styles";
import { IReactPostProps } from "../../interface/dev.article.interface";

import { dateFormat } from "../../helpers/dateFormat";

export const Card: FC<IReactPostProps> = ({
  created_at,
  cover_image,
  description,
  tag_list,
  title,
  url,
  user,
}) => {
  return (
    <Container>
      <Box>
        <Image backgroundImage={cover_image} />
      </Box>
      <Box>
        <div className='box__title'>
          <div>
            <strong>PRODUCT ⋅</strong>
            <span>{dateFormat(created_at)}</span>
          </div>
          <div className='box__tags'>
            {tag_list.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>

        <div className='box__content'>
          <h3>
            <a href={url} target='_blank' rel='noreferrer'>
              {title}
            </a>
          </h3>
        </div>
        <div className='box__description'>
          <p>{description}</p>
        </div>
        <div className='box__author'>
          <div>
            <img src={user.profile_image_90} alt={user.name} />
          </div>
          <div className='author__content'>
            <strong>{user.name}</strong>
            <a href={user.website_url}>Link from profile</a>
          </div>
        </div>
      </Box>
    </Container>
  );
};

/*

[img] [time
      title
      desc
      user[
        img [
          name 
        followers

        ]
      ]   
    ]
*/
