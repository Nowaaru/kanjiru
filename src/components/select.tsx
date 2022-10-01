import ReactSelect, { GroupBase, Props } from "react-select";

function Select<
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>): JSX.Element {
    return <ReactSelect {...props} />;
}

export default Select;
