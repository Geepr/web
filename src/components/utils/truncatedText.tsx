export class TextData {
    public Text : string;
    public MaxLength : number;

    constructor(text : string, maxLength = 50) {
        this.Text = text;
        this.MaxLength = maxLength;
    }
}

export default function TruncatedText({Text, MaxLength = 50} : Readonly<TextData>) {
    const text = Text.length > MaxLength ? `${Text.substring(0, MaxLength)}...` : Text;
    return (<>{text}</>);
}
