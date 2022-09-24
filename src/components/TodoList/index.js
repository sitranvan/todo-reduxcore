import { Button, Col, Input, Row, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { addTodo } from '../../redux/actions';
import { filterPrioritiesSelector, todoRemainingSelector } from '../../redux/selectors';
import Todo from '../Todo';

export default function TodoList() {
  const [todoName, setTodoName] = useState('')
  const [priorty, setPriorty] = useState('Medium')


  const dispatch = useDispatch()
  const todoList = useSelector(todoRemainingSelector)

  const handleInputChange = (e) => {
    setTodoName(e.target.value)
  }

  const handlePriorityChange = (value) => {
    setPriorty(value) // trong ant-design tag Select e.target.value <=> value
  }
  const handleAddTodo = () => {
    dispatch(addTodo({
      id: v4(),
      name: todoName,
      completed: false,
      priorty: priorty
    }))
    setTodoName('')
    setPriorty('Medium')
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map(todo => (
          <Todo id={todo.id} key={todo.id} name={todo.name} priorty={todo.priorty} completed={todo.completed} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select defaultValue="Medium" value={priorty} onChange={handlePriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
