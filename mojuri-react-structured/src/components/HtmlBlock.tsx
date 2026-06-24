type HtmlBlockProps = { html: string; className?: string }

export default function HtmlBlock({ html, className }: HtmlBlockProps) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
}
