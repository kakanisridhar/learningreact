import React from 'react';
import { VisibilityFilters } from './filtersSlice';

type LinkProps = {
  active: boolean;
  children: React.ElementType;
  setVisibilityFilter: (filter: VisibilityFilters) => any;
  filter: VisibilityFilters;
};

const Link = ({ active, children, setVisibilityFilter, filter }: LinkProps) => (
  <button
    onClick={() => setVisibilityFilter(filter)}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
);

export default Link;
