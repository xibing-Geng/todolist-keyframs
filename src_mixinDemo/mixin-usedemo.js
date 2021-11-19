export const mixShowname = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
    mounted() {
        console.log('源于混合的挂载已完成')
    },
}
export const mixNum = {
    data() {
        return {
            name: 'mixin-昔冰',
            partner: '柴'
        }
    },
}
export const mixShowpei = {
    methods: {
        showPei() {
            alert(this.partner)
        }
    },
}