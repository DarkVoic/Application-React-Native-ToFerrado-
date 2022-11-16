import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import Constants from 'expo-constants';


export default StyleSheet.create({
  app: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#1d3a4e",
  },
  conteudo: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "white",
  },

  headerBar: {
    height: 80,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  appName: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
    marginLeft: 12,
  },
  badge: {
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    padding: 5,
    minWidth: 20,
    textAlign: "center",
    marginRight: 12,
    fontSize: 16,
    fontWeight: "bold",
  },

  component: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", 
    alignItems: "stretch",
    margin: 18,
  },
  componentHeader: {
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center",
    marginBottom: 20,
  },
  componentContent: { 
    flex: 1, 
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",  
    alignItems: "stretch",
  },

  // títulos
  h1: {
    fontSize: 30,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 24,
    fontWeight: "bold",
  },
  h3: {
    fontSize: 18,
    fontWeight: "bold",
  },

  // Listas
  list: {
    borderColor: "#dce5e8",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 15,
    flex: 1,
  },
  li: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  li1: {
    borderTopWidth: 2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  liN: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  liText: {
    fontSize: 18,
    flex: 1,
  },
  liSeparator:{
    height: 1.4,
    backgroundColor: '#ced0ce',
    opacity: 0.5
  },

  //Campos
  field:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input:{
    flex: 1,
    padding: 16,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#dce5e8',
    borderRadius: 10,
    fontSize: 18,
  },

  // botôes
  button:{
    height: 30,
    padding: 10,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: 2,
    marginRight: 2,
  },
  buttonImg:{
    height: 15,
    width: 15,
    resizeMode: 'stretch'
  },
  buttonIncluir:{
    height: 30,
    padding: 10,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: 2,
    marginRight: 2,
  },  
  // cores
  active: {
    color: "#fff",
    backgroundColor: "#3b78ac",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#2a679b",
  },
  primary: {
    color: "#fff",
    backgroundColor: "#3b78ac",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#2a679b",
  },
  secondary: {
    color: "#000",
    backgroundColor: "#cddfeb",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#bcceda",
  },
  success: {
    color: "#fff",
    backgroundColor: "#2a9d8f",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#198c7e",
  },
  warning: {
    color: "#000",
    backgroundColor: "#ffd166",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#eec055",
  },
  danger: {
    color: "#fff",
    backgroundColor: "#ef233c",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#de122b",
  },
  light: {
    color: "#000",
    backgroundColor: "#edf6f9",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#dce5e8",
  },
  dark: {
    color: "#fff",
    backgroundColor: "#1d3a4e",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#0c293d",
  },

  // espaçamentos
  mt1: {
    marginTop: 12,
  },
  mt2: {
    marginTop: 24,
  },
  mt3: {
    marginTop: 36,
  },
  mt4: {
    marginTop: 48,
  },

  blank: {
    flex: 1,
    opacity: 0.25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blankImg: {
    width: "80%",
    height: 300,
    resizeMode: 'contain',
  },

  login: {
  backgroundColor: "#306090",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  },
  loginTitulo: {
    textAlign: "center",
    fontSize: 45,
    fontWeight: "bold",
    color: "white",
  },
  loginBotao: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#D0D0D0",
    padding: 15,
    width: 200,
    borderRadius: 15,
  },
  loginBotaoTexto: {
    textAlign: "center",
    fontSize: 20,
  },
});