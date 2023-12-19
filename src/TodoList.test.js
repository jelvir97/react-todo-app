import { fireEvent, queryAllByDisplayValue, render } from '@testing-library/react';
import TodoList from './TodoList';

it('should render correctly', ()=>{
    render(<TodoList />)
})

it('should match snapshot', ()=>{
    const {asFragment} = render(<TodoList />)
    expect(asFragment).toMatchSnapshot();
})

it('should add todo list item',()=>{
    const { queryByText, queryByLabelText} = render(<TodoList />)
    const addTodoInput = queryByLabelText("New Todo");
    const addTodoBtn = queryByText('+')
    expect(queryByText('test todo')).not.toBeInTheDocument();

    fireEvent.change(addTodoInput, { target: { value:'test todo'}})
    fireEvent.click(addTodoBtn)

    expect(queryByText('test todo')).toBeInTheDocument();
})

it('should remove todo list item', ()=>{
    const { queryByText, queryByLabelText} = render(<TodoList />)
    const addTodoInput = queryByLabelText("New Todo");
    const addTodoBtn = queryByText('+')


    fireEvent.change(addTodoInput, { target: { value:'test todo'}})
    fireEvent.click(addTodoBtn)
    expect(queryByText('test todo')).toBeInTheDocument();

    const removeBtn = queryByText('x')
    fireEvent.click(removeBtn)
    expect(queryByText('test todo')).not.toBeInTheDocument();
})

it('should edit todo list item', ()=>{
    const { queryByText, queryByLabelText, queryByDisplayValue} = render(<TodoList />)
    const addTodoInput = queryByLabelText("New Todo");
    const addTodoBtn = queryByText('+')

    fireEvent.change(addTodoInput, { target: { value:'test todo'}})
    fireEvent.click(addTodoBtn)
    expect(queryByText('test todo')).toBeInTheDocument();

    const editBtn = queryByText('Edit')
    fireEvent.click(editBtn)

    const editInput = queryByDisplayValue('test todo')
    expect(editInput).toBeInTheDocument()

    fireEvent.change(editInput, { target: { value: 'changed todo'}})
    fireEvent.submit(editInput)

    expect(queryByText('test todo')).not.toBeInTheDocument();
    expect(queryByText('changed todo')).toBeInTheDocument();
})

it('should toggle mark complete/imcomplete', ()=>{
    const { queryByText, queryByLabelText, debug, container } = render(<TodoList />)
    const addTodoInput = queryByLabelText("New Todo");
    const addTodoBtn = queryByText('+')

    fireEvent.change(addTodoInput, { target: { value:'test todo'}})
    fireEvent.click(addTodoBtn)
    expect(queryByText('test todo')).toBeInTheDocument();

    const completeBtn = queryByText('Mark as Complete')
    expect(completeBtn).toBeInTheDocument()

    fireEvent.click(completeBtn)
    expect(queryByText('Mark as Complete')).not.toBeInTheDocument()
    expect(queryByText('Mark as Incomplete')).toBeInTheDocument()

    fireEvent.click(completeBtn)
    expect(queryByText('Mark as Complete')).toBeInTheDocument()
})