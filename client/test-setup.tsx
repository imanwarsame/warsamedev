import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
import 'vitest-canvas-mock'; //Required to mock canvas to accomodate for Lottie animations

afterEach(cleanup);