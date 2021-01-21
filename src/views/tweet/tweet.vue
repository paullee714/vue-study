<template>
  <div>
    <tweet-card></tweet-card>
    <tweet-write></tweet-write>
  </div>
</template>

<script>
import tweetCard from '@/components/tweet/tweetCard.vue';
import tweetWrite from '@/components/tweet/tweetWrite.vue';

export default {
    name: 'tweet',
    components: {
        tweetCard,
        tweetWrite,
    },
};
</script>
