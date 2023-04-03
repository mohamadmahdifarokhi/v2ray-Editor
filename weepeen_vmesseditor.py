'''
Github.com/TeamWeePeeN

web version: teamweepeen.github.io

'''


import sys
import base64
import json

irancell = 'mtn.ircf.space'
mci = 'mci.ircf.space'
rightel = 'rtl.ircf.space'
mokhaberat =  'mkh.ircf.space'
hiweb = 'hwb.ircf.space'
asiatech = 'ast.ircf.space'
shatel = "sht.ircf.space"
parsonline = "prs.ircf.space"
mobinet = "mbt.ircf.space"
raspina = "rsp.ircf.space"
zitel = "ztl.ircf.space"
pishgaman = "psm.ircf.space"
samantel = "smt.ircf.space"

_vmess = "vmess://"

def operatorname(obj, namespace):
    return [name for name in namespace if namespace[name] is obj]

def push(json2vmess):
	print(json2vmess)

def main():
	_vmessmain = input("Enter Your Vmess (without vmess://): \n")
	_vmesstemp = open('weepeen.json', 'wb')
	_vmessdecode = base64.b64decode(_vmessmain)
	_vmesstemp.write(_vmessdecode)
	_vmesstemp.close()




def operator2vmess(operator):
	vmessedit = open('weepeen.json', 'r')
	json2vmess = json.load(vmessedit)
	json2vmess['add'] = operator
	string_fix = json.dumps(json2vmess)
	json2vmess = base64.b64encode(string_fix.encode('utf-8'))
	
	push('\n'+operator+str(operatorname(operator, globals()))+'\n'+_vmess+str(json2vmess))
	


main()
operator2vmess(irancell)
operator2vmess(mci)
operator2vmess(mokhaberat)
operator2vmess(hiweb)
operator2vmess(asiatech)
operator2vmess(shatel)
operator2vmess(parsonline)
operator2vmess(mobinet)
operator2vmess(raspina)
operator2vmess(pishgaman)
operator2vmess(samantel)
operator2vmess(rightel)
operator2vmess(zitel)

