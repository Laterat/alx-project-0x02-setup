

export interface CardProps {
    title: string,
    content: string,
}

// interfaces/index.ts
export interface PostData {
  title: string;
  content: string;
}


export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}


export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
}


export interface PostProps{
  title: string,
  content: string,
  userId: number,
}