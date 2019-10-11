export interface Props {
  className?: string;
  message: AppState['global']['status']['message'];
  type: AppState['global']['status']['type'];
}
