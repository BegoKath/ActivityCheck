export interface IColumn {
    id: number;
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
  }