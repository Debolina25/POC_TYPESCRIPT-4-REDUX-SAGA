import * as React from 'react';

import ListItem from '../Listitem';
import Title from './Title';
import Label from './Label';

export interface CardProps {
  title?: string,
  label?: string,
  description?: string
};

const defaultProps: Partial<CardProps> = {
  title: '',
  label: '',
  description: ''
};

export const Card: React.StatelessComponent<CardProps> = ({ title, label ,description}) => {
  return (
    <ListItem>
      <Title>{title}</Title>
      <Label>({label})</Label>
      <p> - {description}</p>
    </ListItem>
  );
};

Card.defaultProps = defaultProps;

export default Card;