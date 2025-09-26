import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
	useEffect(() => {
		// Monitor Core Web Vitals
		if ('performance' in window && 'PerformanceObserver' in window) {
			// Largest Contentful Paint
			const lcpObserver = new PerformanceObserver((list) => {
				for (const entry of list.getEntries()) {
					console.log('LCP:', entry.startTime);
				}
			});
			lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

			// First Input Delay
			const fidObserver = new PerformanceObserver((list) => {
				for (const entry of list.getEntries()) {
					const fidEntry = entry as PerformanceEventTiming;
					console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
				}
			});
			fidObserver.observe({ entryTypes: ['first-input'] });

			// Cumulative Layout Shift
			const clsObserver = new PerformanceObserver((list) => {
				let clsValue = 0;
				for (const entry of list.getEntries()) {
					const layoutShiftEntry = entry as PerformanceEntry & { value: number; hadRecentInput: boolean };
					if (!layoutShiftEntry.hadRecentInput) {
						clsValue += layoutShiftEntry.value;
					}
				}
				if (clsValue > 0) {
					console.log('CLS:', clsValue);
				}
			});
			clsObserver.observe({ entryTypes: ['layout-shift'] });

			return () => {
				lcpObserver.disconnect();
				fidObserver.disconnect();
				clsObserver.disconnect();
			};
		}
	}, []);
};