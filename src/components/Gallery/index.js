import React from "react";
import { render, cleanup } from '@testing-library/react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from "../PhotoList";

const portrait = { name: "portraits", description: "Portraits of people in my life" };

afterEach(cleanup)

describe('Gallery is rendering', () => {

  it('renders', () => {
    render(<Gallery currentCategory={portrait} />);
  });
})

function Gallery({ currentCategory }) {
  const { name, description } = currentCategory;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList category={currentCategory.name} />
    </section>
  );
}


export default Gallery;