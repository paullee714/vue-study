<template>
    <div>
        <b-form-input v-model="userName"></b-form-input><b-button variant="primary">하이</b-button>
        <p>
            {{ userName }}
        </p>
        <p>
            {{ changeMyData }}
        </p>
        <p>
            {{ myNewData }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'tweetWrite',
    data() {
        return {
            userName: '',
            myNewData: '',
        };
    },
    computed: {
        changeMyData() {
            if (this.userName === '') {
                return '';
            }

            return `${this.userName} 님, computed입니다 반갑습니다`;
        },
    },
    watch: {
        userName(newVal) {
            console.log(newVal);
            this.myNewData = `${newVal} 님, watch입니다 반갑습니다`;
        },
    },
    methods: {
        sayHello() {
            console.log('Hello World! ');
        },
    },
    created() {
        this.sayHello();
    },
};
</script>

<style>

</style>
