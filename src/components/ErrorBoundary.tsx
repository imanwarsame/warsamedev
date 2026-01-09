import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
	children?: ReactNode;
}

interface State {
	hasError: boolean;
	error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
	};

	public static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Uncaught error:', error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return (
				<div
					style={{
						padding: '2rem',
						color: '#e03131',
						fontFamily: 'system-ui, sans-serif',
						maxWidth: '600px',
						margin: '0 auto',
					}}
				>
					<h2>Something went wrong</h2>
					<p>Please try refreshing the page.</p>
					<pre
						style={{
							background: '#f8f9fa',
							padding: '1rem',
							borderRadius: '4px',
							overflow: 'auto',
							fontSize: '0.875rem',
							color: '#212529',
						}}
					>
						{this.state.error?.toString()}
					</pre>
				</div>
			);
		}

		return this.props.children;
	}
}
