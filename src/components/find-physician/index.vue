<template>
    <v-card class="find-physician mt-10">
        <v-card-title>
            <v-icon>mdi-account-search</v-icon> 
            <span>Find a Physician</span>
        </v-card-title>
        <v-card-text>
            <div class="find-physician--search">
                <input placeholder="Zip Code" />
                <button>
                    <v-icon>
                        mdi-account-search
                    </v-icon>
                </button>
            </div>
            <p>Enter your zip code to find your nearest physician.</p>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
  name: 'FindPhysician',
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss">
.find-physician {
    background: rgba(0,30,61,0.75);
    padding: 20px;
    display: flex;
    flex-direction: column;

    p {
        color: #eaeaea;
        padding-top: 5px;
    }
    .v-card-text {
        padding: 0;
    }
    .find-physician--search {
        display: flex;
        flex-direction: row;
        input {
            background: #fff;
            border: none;
            outline: none;
            padding: 5px;
            color: #000;
            flex: 1 1 80%;
        }
        button {
            flex: 1 1 20%;
            color: #fff;
            background: rgb(160, 29, 50);
        }
    }
    .v-card-title {
        padding-left: 0;
        span {
            display: inline-block;
            padding-left: 8px;
        }
    }
}
</style>
