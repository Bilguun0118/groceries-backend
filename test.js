const app = (cb) => {
    cb();
}

const wrapper = (cb) => {
    return () => {
        console.log('hi');
        cb();
        console.log('bye');
    };
};

app(wrapper(() => {
    console.log('haha')
}));

app(wrapper(() => {
    console.log('hehe');
}));

app(wrapper(() => {
    console.log('huhu');
}));
