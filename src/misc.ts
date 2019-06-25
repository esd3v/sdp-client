export const calculatePageCount = ({perPage, total}: {
  perPage: number;
  total: number;
}) => Math.trunc((total + (perPage - 1)) / perPage);
