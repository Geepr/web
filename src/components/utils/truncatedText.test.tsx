import {render, screen} from "@testing-library/react";
import TruncatedText from "./truncatedText";

test('truncated text renders all when too short', () => {
    const text = "This is a test but don't ignore";

    render(<TruncatedText Text={text} MaxLength={200} />);

    const renderedText = screen.getByText(text);
    expect(renderedText).toBeInTheDocument();
})

test('truncated text too long gets shortened', () => {
    const text = 'This is a test but only ignore some of it';
    const length = 20;

    render(<TruncatedText Text={text} MaxLength={length} />);

    const renderedText = screen.getByText(`${text.substring(0, length)}...`);
    expect(renderedText).toBeInTheDocument();
    const fullText = screen.queryByText(text);
    expect(fullText).not.toBeInTheDocument();
})
