import HeadLayout from "next/head";

type HeadProps = {
    children: string;
}

const Head = ({ children }:HeadProps) => {
  return (
    <HeadLayout>
        <title>{children} | Remstrap</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="keywords" content="Remstrap , marvelxcodes , photo editor, image" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta name="description" content="Edit you photos with ease" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
    </HeadLayout>
  )
}

export default Head