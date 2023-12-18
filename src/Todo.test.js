import { render } from '@testing-library/react';
import Todo from './Todo';

it('should render correctly', ()=>{
    render(<Todo />)
})

it('should match snapshot', ()=>{
    const {asFragment} = render(<Todo item="TodoTest" />)
    expect(asFragment).toMatchSnapshot();
})