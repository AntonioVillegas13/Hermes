import { StyleSheet, Text } from 'react-native'
import React from 'react'
import theme from './theme'

const styles=StyleSheet.create({
    text:{
        fontSize:theme.fontSize.body,
        fontFamily:theme.fonts.main,    
        fontWeight:theme.fontWeight.normal 
    },
    title:{
        fontSize:theme.fontSize.title,
        
    },
    bold:{
        fontWeight:theme.fontWeight.bold
    },
    bolder:{
        fontWeight:theme.fontWeight.bolder
    },
    center:{
        textAlign:'center'
    },
    modernaPrimary:{
        color:theme.colors.modernaRed,
    },
    modernaSecondary:{
        color:theme.colors.modernaYellow,
    }
})
const StyledText = ({children,title,subtitle,bold,bolder,center,modernaPrimary,modernaSecondary,style, ...restOfProps}) => {
  
    const textStyle=[
        styles.text,
        title && styles.title,
        subtitle && styles.subtitle,
        bold && styles.bold,
        bolder && styles.bolder,
        center && styles.center,
        modernaPrimary && styles.modernaPrimary,
        modernaSecondary && styles.modernaSecondary
  ]
    return (
      <Text style={textStyle} {...restOfProps}>{children}</Text>
  )
}

export default StyledText