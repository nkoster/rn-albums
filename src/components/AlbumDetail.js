import React from 'react'
import { Text, View, StyleSheet, Image, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ({ album }) => {
    const { image, thumbnail_image, title, artist, url } = album
    console.log(album)
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainer}>
                    <Image
                        style={styles.thumbnail}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={styles.headerContent}>
                    <Text style={styles.headerTitle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={styles.artwork}
                    source={{ uri: image }}
                />
            </CardSection>
            <CardSection>
                <Button onPress={_ => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    )
}

const styles = StyleSheet.create({
    headerContent: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTitle: {
        fontSize: 20
    },
    thumbnail: {
        height: 50,
        width: 50
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    artwork: {
        height: 400,
        flex: 1,
        width: null
    }
})

export default AlbumDetail
