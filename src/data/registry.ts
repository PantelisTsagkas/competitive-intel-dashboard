import { airlines } from "@/data/datasets/airlines";
import type { Dataset } from "@/lib/types";

/**
 * Every dataset the app can serve. Adding an industry = add a folder under
 * src/data/datasets and register it here; no application code changes.
 */
export const datasets: Dataset[] = [airlines];
