// Extract<T, U>

// Exclude ki opposite.

type Status = 'draft' | 'published' | 'archived'

const messageStatus:Extract<Status,'published'> = 'published';
