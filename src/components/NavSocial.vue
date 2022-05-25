<template>
    <div class="mainNavSocial" :class="{mainNavSocialDesk: mq.mPlus}">
        <nav>
            <a href="https://www.facebook.com/allan.guillotin/" target="_blank"><i class="fa-brands fa-facebook-square fa-2xl"></i></a>
            <a href="https://github.com/Allangui" target="_blank"><i class="fa-brands fa-github-square fa-2xl"></i></a>
            <a href="https://www.linkedin.com/in/allan-guillotin-17b089198/" target="_blank"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
            <a href="mailto:allanguillotin19@hotmail.com" target="_blank"><i class="fa-solid fa-square-envelope fa-2xl"></i></a>   
        </nav>
    </div>
</template>

<script>
    export default {
          inject:["mq"],

    }
</script>

<style lang="scss" scoped>
.mainNavSocial{
    nav{
        margin: 20px 30px 20px 0;
        display: flex;
        column-gap: 20px;
        justify-content: right;
        a{
            color:inherit;
        }
    }
}
.mainNavSocialDesk{
    position: fixed;
    bottom:0;
    right:3%;
        nav{
            flex-direction: column;
            row-gap: 20px;
            margin: 0px ;
            column-gap: 0px;
            justify-content: center;
            align-items: center;
            opacity: .7;
            a{
                transition: all .5s ease;
                &:hover{
                    transform: translateY(-5px);
                    color: var(--green);
                }
            }
            &::after{
                content: '';
                position: relative;
                width:1px;
                
                height: 20vh;
                bottom:0;
                left:0;
                background-color: #a8b2d1;
                opacity: .3;
            }
        }
}
</style>