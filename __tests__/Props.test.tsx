import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PostDetail from '../pages/posts/[id]'
import { POST } from '../types/types'

describe('PostDetailPage Test Cases', () => {
  const dummyProps: POST = {
    id: 1,
    title: 'title1',
    content: 'content1',
    username: 'username1',
    tags: [
      { id: 1, name: 'tag1' },
      { id: 2, name: 'tag2' },
    ],
    created_at: '2021-01-12 15:15:40',
  }

  it('Should render', async () => {
    render(<PostDetail {...dummyProps} />)
    expect(screen.getByText('title1')).toBeInTheDocument()
    expect(screen.getByText('content1')).toBeInTheDocument()
    expect(screen.getByText('by username1')).toBeInTheDocument()
    expect(screen.getByText('tag1')).toBeInTheDocument()
    expect(screen.getByText('tag2')).toBeInTheDocument()
    expect(screen.getByText('2021-01-12 15:15:40')).toBeInTheDocument()
  })
})
