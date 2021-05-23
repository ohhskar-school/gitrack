/** @jsxImportSource @emotion/react */

import Card from 'components/Card';
import placeholder from 'assets/images/user-image.svg';

// Style
import * as style from './task-card-styles';

export default function TaskCard({
  children,
  title,
  assigneeImage,
  tag,
  onClick,
  ...passedProps
}) {
  return (
    <Card onClick={onClick} css={style.taskCard} {...passedProps}>
      <div css={style.taskCard_header}>
        <p css={style.taskCard_title}>{title}</p>
        <div css={style.taskCard_imageContainer}>
          <img
            src={assigneeImage || placeholder}
            alt="user"
            css={style.taskCard_image}
          />
        </div>
      </div>
      {tag && <p css={style.taskCard_tag}>{tag}</p>}
    </Card>
  );
}