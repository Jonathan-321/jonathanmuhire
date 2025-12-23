import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Icon } from 'lucide-react'
import { MessageSquare, Send } from 'lucide-react'

interface Comment {
  id: string
  postId: string
  author: string
  content: string
  timestamp: number
}

interface CommentsProps {
  postId: string
}

export function Comments({ postId }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Load comments from localStorage
    const storedComments = localStorage.getItem('blog-comments')
    if (storedComments) {
      const allComments = JSON.parse(storedComments)
      setComments(allComments.filter((c: Comment) => c.postId === postId))
    }

    // Load saved author name
    const savedAuthor = localStorage.getItem('comment-author-name')
    if (savedAuthor) {
      setAuthorName(savedAuthor)
    }
  }, [postId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!newComment.trim() || !authorName.trim()) return

    setIsSubmitting(true)

    const comment: Comment = {
      id: Date.now().toString(),
      postId,
      author: authorName,
      content: newComment,
      timestamp: Date.now(),
    }

    // Save to localStorage
    const storedComments = localStorage.getItem('blog-comments')
    const allComments = storedComments ? JSON.parse(storedComments) : []
    allComments.push(comment)
    localStorage.setItem('blog-comments', JSON.stringify(allComments))
    
    // Save author name for future comments
    localStorage.setItem('comment-author-name', authorName)

    // Update local state
    setComments([...comments, comment])
    setNewComment('')
    setIsSubmitting(false)
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="mt-16 border-t pt-8">
      <div className="mb-8">
        <h2 className="mb-2 flex items-center gap-2 text-2xl font-semibold">
          <MessageSquare className="h-6 w-6" />
          Comments ({comments.length})
        </h2>
        <p className="text-sm text-muted-foreground">
          Share your thoughts and feedback
        </p>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="author" className="mb-1 block text-sm font-medium">
              Your Name
            </label>
            <input
              id="author"
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="Enter your name"
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="comment" className="mb-1 block text-sm font-medium">
            Your Comment
          </label>
          <textarea
            id="comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment here..."
            rows={4}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting || !newComment.trim() || !authorName.trim()}
          className="flex items-center gap-2"
        >
          <Send className="h-4 w-4" />
          {isSubmitting ? 'Posting...' : 'Post Comment'}
        </Button>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No comments yet. Be the first to share your thoughts!
          </p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="rounded-lg border bg-muted/30 p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="font-medium">{comment.author}</span>
                <span className="text-xs text-muted-foreground">
                  {formatDate(comment.timestamp)}
                </span>
              </div>
              <p className="whitespace-pre-wrap text-sm">{comment.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}