export type ClassName = { className?: string };

export type SupportedConverters = "youtube" | "dropbox";

export type ConverterFormProps = {
  handleSubmit: (videoUrl: string) => void;
  converter: Converter;
};

export type Converter = {
  href: SupportedConverters;
  title: string;
  placeholder: string;
  icon: JSX.Element;
};
