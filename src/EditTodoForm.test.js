import { render } from '@testing-library/react';
import EditTodoForm from './EditTodoForm';

it('should render correctly', ()=>{
    render(<EditTodoForm />)
})

it('should match snapshot', ()=>{
    const {asFragment} = render(<EditTodoForm id="test" val="test" editTodo={()=>{}} />)
    expect(asFragment).toMatchSnapshot();
})