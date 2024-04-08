/* eslint-disable react/no-unescaped-entities */
import Error from "next/error";
import Link from "next/link";

const ErrorPage = ({ statusCode }) => {
  if (statusCode === 404) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="mb-4 text-9xl font-thin">404</h1>
          <p className="mb-8 text-lg text-gray-600">
            Oops! It seems like the city you're looking for doesn't exist.
          </p>
          <Link className="mt-4 text-4xl font-thin" href="/">
            Go to Home
          </Link>
        </div>
      </div>
    );
  }
  return <Error statusCode={statusCode} />;
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
  return { statusCode };
};

export default ErrorPage;
