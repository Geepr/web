export class TextData {
    public Text : string;
    public MaxLength : number;

    constructor(text : string, maxLength = 50) {
        this.Text = text;
        this.MaxLength = maxLength;
    }
}

export default function TruncatedText(props : Readonly<TextData>) {
    const text = props.Text.length > props.MaxLength ? `${props.Text.substring(0, props.MaxLength)}...` : props.Text;
    return (<>{text}</>);
}
