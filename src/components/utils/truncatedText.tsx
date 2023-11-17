export class TextData {
    public Text : string;
    public MaxLength : number;

    constructor(text : string, maxLength = 50) {
        this.Text = text;
        this.MaxLength = maxLength;
    }
}

export default function TruncatedText(data : Readonly<TextData>) {
    const text = data.Text.length > data.MaxLength ? `${data.Text.substring(0, data.MaxLength)}...` : data.Text;
    return (<>{text}</>);
}
