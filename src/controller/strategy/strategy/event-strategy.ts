export interface EventStrategy {
  event(): void;
  predicate(): boolean;
  errorMessage(): string;
}