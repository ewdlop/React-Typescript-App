interface ErrorProps {
    message: string;
}

const ErrorComponent: React.FC<ErrorProps> = ({message}) => {
    return <div>Oops...{message}</div>;
}

export default ErrorComponent;