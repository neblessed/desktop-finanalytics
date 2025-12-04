import "./Hint.css";

type HintProps = {
    content: string;
};

function Hint(props: HintProps) {
    return (
        <div className="hint_block">
            <div className="hint">
                <p className="hint__content">{props.content}</p>
            </div>
            <div className="hint__tail" />
        </div>
    );
}

export default Hint;
