export interface SnippetProps {
  snippetId: string;
  snippetName: string;
  snippet: string;
  theme: string;
  language: string;
  showLineNumbers: boolean;
}

export interface AlertProps {
  type: "success" | "error" | "warning" | "info";
  message: string;
  className?: string;
  onClose?: () => void;
}

export interface DropdownProps {
  options: string[];
  onChange?: React.ChangeEventHandler;
  className?: string;
  label?: string;
}

export interface CheckboxProps {
  label: string;
  className?: string;
  onChange?: React.ChangeEventHandler;
  checked?: boolean;
}
