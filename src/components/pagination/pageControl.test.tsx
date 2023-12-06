import {fireEvent, render, screen} from "@testing-library/react";
import {PageControl} from "./pageControl";

test('page control single page', () => {
    render(<PageControl Page={1} TotalPages={1} SetPage={() => {}} />);

    expect(screen.queryByText('Previous')).not.toBeInTheDocument();
    expect(screen.queryByText('Next')).not.toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.queryByText('2')).not.toBeInTheDocument();
    expect(screen.queryByText('…')).not.toBeInTheDocument();
})

test('page control two pages set to first', () => {
    render(<PageControl Page={1} TotalPages={2} SetPage={() => {}} />);

    expect(screen.queryByText('Previous')).not.toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument()
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('1').parentElement).toHaveClass('active');
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.queryByText('3')).not.toBeInTheDocument();
    expect(screen.queryByText('…')).not.toBeInTheDocument();
})

test('page control two pages set to second', () => {
    render(<PageControl Page={2} TotalPages={2} SetPage={() => {}} />);


    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.queryByText('Next')).not.toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('2').parentElement).toHaveClass('active');
    expect(screen.queryByText('3')).not.toBeInTheDocument();
    expect(screen.queryByText('…')).not.toBeInTheDocument();
})

test('page control three pages set to second', () => {
    render(<PageControl Page={2} TotalPages={3} SetPage={() => {}} />);


    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('2').parentElement).toHaveClass('active');
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.queryByText('…')).not.toBeInTheDocument();
})

test('page control many pages set to middle', () => {
    render(<PageControl Page={10} TotalPages={20} SetPage={() => {}} />);


    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('20')).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('10').parentElement).toHaveClass('active');
    expect(screen.getAllByText('…').length).toBe(2);
})

test('page control page change next', () => {
    let lastPageSetTo = -1;
    render(<PageControl Page={10} TotalPages={20} SetPage={(page : number) => {lastPageSetTo = page;}} />);

    fireEvent.click(screen.getByText('Next'));

    expect(lastPageSetTo).toBe(11);
})

test('page control page change previous', () => {
    let lastPageSetTo = -1;
    render(<PageControl Page={10} TotalPages={20} SetPage={(page : number) => {lastPageSetTo = page;}} />);

    fireEvent.click(screen.getByText('Previous'));

    expect(lastPageSetTo).toBe(9);
})

test('page control page change first', () => {
    let lastPageSetTo = -1;
    render(<PageControl Page={10} TotalPages={20} SetPage={(page : number) => {lastPageSetTo = page;}} />);

    fireEvent.click(screen.getByText('1'));

    expect(lastPageSetTo).toBe(1);
})

test('page control page change last', () => {
    let lastPageSetTo = -1;
    render(<PageControl Page={10} TotalPages={20} SetPage={(page : number) => {lastPageSetTo = page;}} />);

    fireEvent.click(screen.getByText('20'));

    expect(lastPageSetTo).toBe(20);
})
